const displayData = (data) => {
  jobListContainer.innerHTML = "";
  data.forEach((job) => {
    const jobCard = document.createElement("div");
    jobCard.className = "bg-base-200 p-4 rounded-lg shadow-md";

    let statusClass = "bg-warning text-black";
    let statusText = "Pending Interview";

    if (job.interview) {
      statusClass = "bg-success text-white";
      statusText = "Interview";
    }

    if (job.rejected) {
      statusClass = "bg-error text-white";
      statusText = "Rejected";
    }

    jobCard.innerHTML = `
      <div class="flex justify-between items-center">
        <div>
            <h2 class="text-xl font-bold">${job.companyName}</h2>
            <p class="text-sm text-gray-500">${job.position}</p>
        </div>      
        <i class="fa fa-trash text-gray-500 cursor-pointer p-3 hover:text-red-500"></i>
      </div>
        <p class="flex flex-wrap gap-2 text-sm my-4">           
            <span class="border rounded-full py-1 px-3">${job.location}</span>
            <span class="border rounded-full py-1 px-3">${job.type}</span>
            <span class="border rounded-full py-1 px-3">${job.salary}</span>
        </p>
        <p class="text-gray-700 mb-4">${job.description}</p>
    `;
    const deleteBtn = jobCard.querySelector(".fa-trash");
    deleteBtn.addEventListener("click", () => {
      const index = jobs.findIndex((j) => j.id === job.id);
      jobs.splice(index, 1);
      renderJobs();
    });
    jobListContainer.appendChild(jobCard);
  });
};
