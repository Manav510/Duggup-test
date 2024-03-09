
<script>
  import { getContext, onMount } from 'svelte';
  import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent
  } from 'svelte-vertical-timeline';
  
  const userData = getContext('userDataContext');
  let groupedEntries = [];
  
  onMount(() => {
    const entriesByDate = userData.user.timelineItems.reduce((acc, entry) => {
      const { date } = entry; 
  
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(entry);
      return acc;
    }, {});
  
    groupedEntries = Object.entries(entriesByDate).map(([date, entries]) => ({
      date,
      entries
    })).sort((a, b) => new Date(b.date.split(' ')[1], new Date(0, new Date().toLocaleString('en-us', {month: "short"}).indexOf(b.date.split(' ')[0]) / 4).getMonth()) - new Date(a.date.split(' ')[1], new Date(0, new Date().toLocaleString('en-us', {month: "short"}).indexOf(a.date.split(' ')[0]) / 4).getMonth()));
  });
  </script>
  
  
  <div class="flex flex-col items-start" style="margin-left: -10rem;">
    <Timeline position="right">
      {#each groupedEntries as { date, entries }}
        <TimelineItem>
          <TimelineOppositeContent slot="opposite-content">
            
            {#each entries as entry}
              {#if entry.isJob === "Yes"}
                <div class="flex flex-col items-end">
                  <img src={entry.image} alt="company-logo" class="w-12 h-12 rounded-full border border-black mb-4"> 
                  <h3>{entry.company}</h3>
                  <h5>{entry.office}</h5>
                  <h5>Joined</h5>
                </div>
              {/if}
              
            {/each}
            <p>{date}</p>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <!-- Determine the dot style based on the presence of job entries -->
            {#if entries.some(entry => entry.isJob === "Yes")}
              <TimelineDot style='width: 25px; height: 25px; background-color: #FFF; border: 9px solid blue;'/>
            {:else}
              <TimelineDot style='width: 16px; height: 16px; background-color: #FFF; border: 3px solid blue;'/>
            {/if}
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {#each entries as entry}
  {#if entry.isJob === "Yes"}
    <div class="bg-white shadow-md rounded-lg p-6 w-[550px] h-auto mx-auto mb-4 flex flex-col items-left">
      <h1 class="text-xl font-semibold text-gray-800 truncate"> {entry.position}</h1>
      <p class="text-sm text-gray-600 truncate ml-4">{entry.type}</p>
    </div>
  {:else}
    <div class="bg-white shadow-md rounded-lg p-6 w-[550px] h-[100px] mx-auto mb-4 flex items-center">
      <img src={entry.image} alt="Post image" class="w-auto h-full max-h-full rounded">
      <p class="truncate ml-4">{entry.content}</p>
    </div>
  {/if}
{/each}
          </TimelineContent>
        </TimelineItem>
      {/each}
    </Timeline>
  </div>