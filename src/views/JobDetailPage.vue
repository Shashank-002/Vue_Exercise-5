<template>
    <div>
        <h1>Job Details</h1>
        <div class="job-details">
            <p>Job ID: <span>{{ jobId }}</span></p>
            <p>Job Title: <span>{{ job.title }}</span></p>
            <p>Job Details: <span>{{ job.details }}</span></p>
            <button @click="$router.push('/jobs')" class="back-button">Back to Jobs</button>
        </div>
    </div>
</template>

<script>
import JobsData from '../data/jobs.json';
export default {
    name: 'JobDetailPage',
    data() {
        return {
            jobId: this.$route.params.id,
            jobs: JobsData,
            job: {}
        };
    },
    mounted() {
        this.job = this.jobs.find(job => job.id == this.jobId);
    }
};
</script>

<style>
h1 {
    text-align: center;
}

.job-details {
    background-color: #f8fafc;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: 20px auto;
}

.job-details:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

p {
    font-weight: bold;
    font-size: 1.1rem;
    color: #1e293b;
    margin-bottom: 10px;
}

span {
    font-weight: normal;
}

.back-button {
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
}
</style>
