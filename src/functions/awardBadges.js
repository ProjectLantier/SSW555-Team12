// functions that will be called when a location is claimed as visited to award appropriate badges
// since it's not possible to award badges without the implementation of location claiming yet, this is just initial implementation of idea behind badge awarding
// database with users also not implemented yet

// array of possible badges that can be awarded
// for criteria: assumes that visistedLocations is an existing field for users in the database and the type of location for each location entry is also an existing field
// returns true if criteria is met, false otherwise
export const badges = [
  {
    id: 1,
    name: 'Noobie',
    description: 'Awarded for your first location visited!',
    criteria: (user) => user.visitedLocations.length === 1,
  },
  {
    id: 2,
    name: 'Explorer',
    description: 'Awarded for visiting five locations!',
    criteria: (user) => user.visitedLocations.length === 5,
  },
  {
    id: 3,
    name: 'Adventurer',
    description: 'Awarded for visiting 10 locations!',
    criteria: (user) => user.visitedLocations.length === 10,
  },
  {
    id: 4,
    name: 'Expert',
    description: 'Awarded for visiting 15 locations!',
    criteria: (user) => user.visitedLocations.length === 15,
  },
  {
    id: 5,
    name: 'Foodie Explorer',
    description: 'Awarded for visiting 5 food locations!',
    criteria: (user) =>
      user.visitedLocations.filter((location) => location.type === 'food')
        .length === 5,
  },
  {
    id: 6,
    name: 'Foodie Adventurer',
    description: 'Awarded for visiting 10 food locations!',
    criteria: (user) =>
      user.visitedLocations.filter((location) => location.type === 'food')
        .length === 10,
  },
  {
    id: 7,
    name: 'Time Traveler',
    description: 'Awarded for visiting 5 historical sites!',
    criteria: (user) =>
      user.visitedLocations.filter((location) => location.type === 'historical')
        .length === 5,
  },
]

// function for fetching the current user data from firebase realtime database
export const currentUserData = async () => {
  try {
    const currentUserUID = await firebase.auth().currentUser.uid
    const userRef = firebase.database().ref(`users/${currentUserUID}`)
    const snapshot = await userRef.once('value')
    const userData = snapshot.val()
    console.log('User data:', userData)
    return userData
  } catch (error) {
    console.error('Error fetching user data:', error.message)
  }
}

// function for awarding badges; for each badge, checks if badge has already been awarded; if not, pushes that badge into the user's badge collection array
// this is the function that should be called when a location is marked as visitied by a user
export const awardBadges = (user, badges) => {
  badges.forEach((badge) => {
    if (
      !user.awardedBadges.some((awardedBadge) => awardedBadge.id === badge.id)
    ) {
      if (badge.criteria(user)) {
        user.awardedBadges.push(badge)
        console.log(`Badge awarded: ${badge.name}`)
      }
    }
  })
}

// usage requires the database to have users that have a field for badges and visitedLocations
