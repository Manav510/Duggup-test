
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