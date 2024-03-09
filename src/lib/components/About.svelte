<!-- <script>
  import { getContext } from 'svelte';
	let userData = getContext('userDataContext'); 
</script>
  <div class="profile-intro">
    <img src={userData.user.profilePicture} alt={`Profile picture of ${userData.user.name}`} class="profile-picture" />
    <h2 class="user-name">{userData.user.name}</h2>
  </div>
  <div class="user-profile">
    <div class="profile-info">
      <p class="user-bio">{userData.user.bio}</p>
      <div class="company-details">
        <img src={userData.user.logo} alt="duggup-logo" class="company-logo"/>
        <h5>{userData.user.company}</h5>
        <p class="user-title">{userData.user.title}</p>
      </div>
      
    </div>
    <div class="user-details">
      
      <button class="follow-btn" on:click={() => userData.user.followed = !userData.user.followed}>
        {userData.user.followed ? 'Unfollow' : 'Follow'}
      </button>
      <div class="website-link">
        <a href="https://yourwebsite.com" class="website-link" target="_blank" rel="noopener noreferrer">
          My website
          <span class="link-icon">🔗</span>
          <span class="ellipsis">•••</span>
        </a>
      </div>
    </div>

  </div>
  <style>
  .user-profile {
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 864px;
height:  238px;
top: 22px;
left: 211px;
gap: 20px;
position: relative;
margin: 16px 0; 
  }
  .profile-info{
    width: Fill (834px);
height: 82px;
justify-content: space-between;
position: relative;
display: flex;
flex-direction: row;

  }
  .profile-picture {
    width: 120px;
  height: 120px;
  border-radius: 120px;
  border: 5px solid #EAEFF5;
  position: absolute; 
  top: 43px;
  left: 16px;
  }
  
  .profile-intro {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  
  .company-details{
    display: flex; /* This makes it a flex container */
  flex-direction: column; 
  /* justify-content: flex-end;  */
  align-items: flex-end;
  width: 140px;
  height: 72px; /* Works if there are multiple flex items inside */
  column-gap: 0px;
    position: relative;
  }
  
  .user-name {
    display: flex;
    font-family: Inter;
font-size: 24px;
font-weight: 700;
line-height: 28px;
letter-spacing: 0em;
text-align: center;
    font-size: 24px; /* Larger font size for name */
    width: 156px;
height: 56px;
top: 173px;
left: 11px;
position: absolute; 
  }
  
  .user-title {
    font-size: 14px; /* Slightly smaller font size for title */
    color: #666;
    margin-top: 0.5rem; /* Space between company logo and title */
  }
  
  .user-bio {
    width: 592px;
height: 72px;
padding: 0px, 8px, 0px, 0px;
gap: 8px;

  }
  
  .follow-btn {
    background: #fff;
    color: #000;
    border: 0.5px solid #4D4D4D;
    box-shadow: 0px 4px 0px 0px #4D4D4D;
    border-radius: 4px; 
    padding: 8px 20px;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase; 
    margin-bottom: 20px; 
  }
  
  .follow-btn:hover {
    background: #0066FF;
    color: #fff;
    border: 0.5px solid #0066FF;
    box-shadow: 0px 2px 0px 0px #003A91;

  }
  
  .company-logo {
    width: 30px; /* Adjust based on actual logo size */
    height: 30px;
    margin-bottom: 0.5rem;
    border-radius: 50%; /* Space between logo and the user title */
  }
  
  
  .user-details{
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* This will align the child elements to the start and end of the container */
    align-items: center;
  }
  .website-link{
    position: relative;
    align-items: flex-end;
  }
  </style> -->
  <script>
    import { getContext } from 'svelte';
    let userData = getContext('userDataContext');
  </script>
  
  <div class="flex flex-col p-5 w-full max-w-[864px] h-[238px] my-4 relative">
    <img src={userData.user.profilePicture} alt={`Profile picture of ${userData.user.name}`} class="rounded-full border-4 border-[#EAEFF5] absolute w-[120px] h-[120px] top-[23px] left-4" />
    <h2 class="font-inter font-bold text-2xl text-center absolute w-[156px] h-[56px] top-[173px] left-[11px]">{userData.user.name}</h2>
    <div class="flex flex-col p-5 w-[864px] h-[238px] relative my-4 gap-5" style="top: 22px; left: 211px;">
    <div class="flex justify-between items-start relative flex-row w-full h-[82px]">
      <p class="w-[592px] h-[72px] pr-2">{userData.user.bio}</p>
      
      <div class="flex flex-col items-end w-[140px] h-[72px] relative">
        <img src={userData.user.logo} alt="duggup-logo" class="rounded-full mb-2 w-[30px] h-[30px]" />
        <h5>{userData.user.company}</h5>
        <p class="text-sm text-gray-600 mt-2">{userData.user.title}</p>
      </div>
    </div>
    
    <div class="flex justify-between items-center">
      <button class="bg-white text-black border border-gray-400 shadow-[0_4px_0_0_#4D4D4D] rounded px-5 py-2 uppercase font-bold cursor-pointer mb-5 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-[0_2px_0_0_#003A91]">
        {userData.user.followed ? 'Unfollow' : 'Follow'}
      </button>
      <a href={userData.user.socialLinks.website} class="flex items-end" target="_blank" rel="noopener noreferrer">
        My website
        <span class="ml-2">🔗</span>
        <span>•••</span>
      </a>
    </div>
  </div>
  </div>