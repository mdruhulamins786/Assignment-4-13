const jobs = [
  {
    id: crypto.randomUUID(),
    companyName: "Google",
    position: "Frontend Developer",
    location: "Remote",
    type: "Full Time",
    salary: "80,000 BDT",
    description: "ওয়েবসাইটের ইউজার ইন্টারফেস তৈরি ও মেইনটেইন করা।",
    interview: false,
    rejected: false,
  },
  {
    id: crypto.randomUUID(),
    companyName: "Google",
    position: "Frontend Developer",
    location: "Remote",
    type: "Full Time",
    salary: "80,000 BDT",
    description: "ওয়েবসাইটের ইউজার ইন্টারফেস তৈরি ও মেইনটেইন করা।",
    interview: false,
    rejected: true,
  },
  {
    id: crypto.randomUUID(),
    companyName: "Google",
    position: "Frontend Developer",
    location: "Remote",
    type: "Full Time",
    salary: "80,000 BDT",
    description: "ওয়েবসাইটের ইউজার ইন্টারফেস তৈরি ও মেইনটেইন করা।",
    interview: true,
    rejected: false,
  },
];

const jobListContainer = document.getElementById("job-list");

function renderJobs() {
  jobListContainer.innerHTML = "";
  jobs.forEach((job) => {
    const jobCard = document.createElement("div");
    jobCard.className = "bg-base-200 p-4 rounded-lg shadow-md";

    let statusClass = "bg-primary-content text-gray-700 outline-gray-400";
    let statusText = "Pending Interview";

    if (job.interview) {
      statusClass = "bg-success text-white";
      statusText = "Interview Scheduled";
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
                <div>
                    <i class="fa fa-trash text-gray-500 cursor-pointer p-3 text-center hover:text-red-500 transition duration-200"></i>
                </div>
            </div>
            <p class="flex flex-row items-center text-center flex-wrap gap-2 text-sm my-4">
                <span class="border-2 border-gray-200 rounded-full py-2 px-4">${job.location}</span>
                <span class="border-2 border-gray-200 rounded-full py-2 px-4">${job.type}</span>
                <span class="border-2 border-gray-200 rounded-full py-2 px-4">${job.salary}</span>
            </p>
             <p
              class="inline-block ${statusClass} mb-3 text-sm px-3 py-1 outline outline-gray-400 text-gray-700 rounded font-semibold"
            >
              ${statusText}
            </p>
            <p class="text-gray-700 mb-4">${job.description}</p>
            <div class="flex gap-2">
                <button class="btn btn-sm btn-outline btn-success">Interview</button>   
                <button class="btn btn-sm btn-outline btn-error">Rejected</button>
            </div>
        `;
    jobListContainer.appendChild(jobCard);

    const deleteBtn = jobCard.querySelector(".fa-trash");
    deleteBtn.addEventListener("click", () => {
      const index = jobs.findIndex((j) => j.id === job.id);
      jobs.splice(index, 1);
      renderJobs();
    });
  });
}

renderJobs();
