<script>
    // Suppose these are imported or fetched from a global store or an API
    import { getContext } from 'svelte';
	let userData = getContext('userDataContext'); 
    import profile from '$lib/images/profile_img.jpeg';
  import logo from '$lib/images/duggup_logo.jpeg';

  </script>
  <div class="profile-intro">
    <img src={profile} alt={`Profile picture of ${userData.user.name}`} class="profile-picture" />
    <h2 class="user-name">{userData.user.name}</h2>
  </div>
  <div class="user-profile">
    <div class="profile-info">
      <p class="user-bio">{userData.user.bio}</p>
      <div class="company-details">
        <img src={logo} alt="duggup-logo" class="company-logo"/>
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
    /* display: flex;
    align-items: center;
    background: #fff;  White background 
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  Subtle shadow 
    margin: 16px 0; Vertical */
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
  </style>