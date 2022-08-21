const config = {
  server: {
    path: "https://vvgnlisandboxapi.herokuapp.com/api/vvgnli/v1/",
    port: "",
  },
  api: {
    login: "login",
    signUp: "signup",
    uploadMedia: 'upload',
    handlePost: 'postHandle',
    getApprovedPhotos: 'getApprovedPhotos',
    getPendingPhotos: 'getPendingPhotos',
    updatePostStatus: 'updatePostStatus',
    getPendingVideos: 'getPendingVideos',
    getApprovedVideos: 'getApprovedVideos',
    getCountOfApprovedPhotos: 'getCountOfApprovedPhotos',
    getCountOfApprovedVideos: 'getCountOfApprovedVideos',
    getPendingResearchWork: 'getPendingResearchWork',
    getApprovedResearchWork: 'getApprovedResearchWork',
    getUserDetails: 'getUserDetails',
    getVideosForUserId: 'getVideosForUserId',
    getPhotosForUserId: 'getPhotosForUserId',
    getResearchWorkForUserId: 'getResearchWorkForUserId',
    deletePost: 'deletePost',
    changeUserRole: 'changeUserRole',
    // getOtp: '/user/sendotp',
    // verifyOtp: '/user/verify?phoneNumber',
    // forgotpassword : '/forgotpassword',
    uploadResearchWork: "uploadResearchWork",
    like:'like',
    comment:'comment',
    getCommentsOnPost:'getCommentsOnPost',
    getLikedPost:'getLikedPost'
  },
  role: {
    admin: "admin/",
  },
};
export default config;
