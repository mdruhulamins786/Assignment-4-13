// main data
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
    rejected: true,
  },
  // নতুন 8টি data
  {
    id: crypto.randomUUID(),
    companyName: "Facebook",
    position: "Backend Developer",
    location: "Dhaka",
    type: "Full Time",
    salary: "90,000 BDT",
    description: "API এবং server-side logic তৈরি করা।",
    interview: false,
    rejected: false,
  },
  {
    id: crypto.randomUUID(),
    companyName: "Amazon",
    position: "Full Stack Developer",
    location: "Remote",
    type: "Part Time",
    salary: "75,000 BDT",
    description: "Frontend এবং Backend উভয় ডেভেলপ করা।",
    interview: true,
    rejected: false,
  },
  {
    id: crypto.randomUUID(),
    companyName: "Microsoft",
    position: "Data Scientist",
    location: "Chittagong",
    type: "Full Time",
    salary: "120,000 BDT",
    description: "ডেটা analysis এবং machine learning মডেল তৈরি করা।",
    interview: false,
    rejected: false,
  },
  {
    id: crypto.randomUUID(),
    companyName: "Netflix",
    position: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    salary: "60,000 BDT",
    description: "User Interface design এবং user experience improve করা।",
    interview: false,
    rejected: true,
  },
  {
    id: crypto.randomUUID(),
    companyName: "Spotify",
    position: "Mobile Developer",
    location: "Dhaka",
    type: "Full Time",
    salary: "85,000 BDT",
    description: "iOS এবং Android অ্যাপ ডেভেলপ করা।",
    interview: true,
    rejected: false,
  },
  {
    id: crypto.randomUUID(),
    companyName: "Tesla",
    position: "Embedded Systems Engineer",
    location: "Remote",
    type: "Full Time",
    salary: "110,000 BDT",
    description: "IoT এবং embedded systems develop করা।",
    interview: false,
    rejected: false,
  },
  {
    id: crypto.randomUUID(),
    companyName: "Adobe",
    position: "Product Manager",
    location: "Dhaka",
    type: "Full Time",
    salary: "130,000 BDT",
    description: "প্রোডাক্ট strategy এবং roadmap তৈরি করা।",
    interview: false,
    rejected: false,
  },
  {
    id: crypto.randomUUID(),
    companyName: "Apple",
    position: "iOS Developer",
    location: "Remote",
    type: "Contract",
    salary: "100,000 BDT",
    description: "iOS অ্যাপ development এবং maintenance।",
    interview: false,
    rejected: false,
  },
  {
    id: crypto.randomUUID(),
    companyName: "Samsung",
    position: "QA Engineer",
    location: "Chittagong",
    type: "Full Time",
    salary: "70,000 BDT",
    description: "Software testing এবং bug fix করা।",
    interview: true,
    rejected: false,
  },
];

// interview data
const interviews = () => jobs.filter((j) => j.interview);
const rejectedData = () => jobs.filter((j) => j.rejected);

console.log(interviews(), rejectedData());

const jobListContainer = document.getElementById("job-list");
const totalCountEl = document.getElementById("total-count");
const interviewCountEl = document.getElementById("interview-count");
const rejectedCountEl = document.getElementById("rejected-count");

// filter jobs
document
  .getElementById("all-data")
  .addEventListener("click", () => renderJobs(jobs));
document
  .getElementById("interview-data")
  .addEventListener("click", () => renderJobs(interviews()));
document
  .getElementById("rejected-data")
  .addEventListener("click", () => renderJobs(rejectedData()));

// display data
function updateCounts() {
  totalCountEl.textContent = jobs.length;
  interviewCountEl.textContent = interviews().length;
  rejectedCountEl.textContent = rejectedData().length;
}

// update job status
function updateJobStatus(id, status) {
  const job = jobs.find((j) => j.id === id);
  if (!job) return;

  if (status === "interview") {
    job.interview = !job.interview;
    job.rejected = false;
  }

  if (status === "rejected") {
    job.rejected = !job.rejected;
    job.interview = false;
  }

  renderJobs(jobs);
}

// render jobs
function renderJobs(data) {
  jobListContainer.innerHTML = "";

  if (data.length == 0) {
    jobListContainer.innerHTML = ` <div class="flex flex-col justify-center items-center text-center h-60">
                                      <img src="./picture/jobs.png" alt="" />
                                      <h3 class="font-semibold text-gray-700 text-xl">No jobs available</h3>
                                      <p class="text-sm text-gray-500">Check back soon for new job opportunities</p>
                                    </div>`;
  }

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

      <p class="inline-block ${statusClass} mb-3 text-sm px-3 py-1 rounded font-semibold">
        ${statusText}
      </p>

      <p class="text-gray-700 mb-4">${job.description}</p>

      <div class="flex gap-2">
        <button onclick="updateJobStatus('${job.id}', 'interview')" class="btn btn-sm btn-outline btn-success">Interview</button>   
        <button onclick="updateJobStatus('${job.id}', 'rejected')" class="btn btn-sm btn-outline btn-error">Rejected</button>
      </div>
    `;

    const deleteBtn = jobCard.querySelector(".fa-trash");
    deleteBtn.addEventListener("click", () => {
      const index = data.findIndex((j) => j.id === job.id);
      data.splice(index, 1);
      renderJobs(data);
    });

    const p = document.createElement("p");
    p.innerText = "Ruhul";

    jobListContainer.appendChild(jobCard);
  });

  updateCounts();
}

renderJobs(jobs);
