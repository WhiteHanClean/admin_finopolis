export const paths = {
  home: '/',
  authActivateUser: '/auth/activate-user',
  authRecoverPassword: '/auth/recover-password',
  blogs: '/blogs',
  blogDetail: (slug: string) => `/blogs/${slug}`,
  tours: '/tours',
  tourDetail: (slug: string) => `/tours/${slug}`,
  profile: (email: string) => `/profile/${email}`,
  profileNotifications: (email: string) => `/profile/${email}/notifications`,
  profileHistory: (email: string) => `/profile/${email}/history`,
  profileFavorites: (email: string) => `/profile/${email}/favorites`,
  profileSettings: (email: string) => `/profile/${email}/settings`,
} as const;
