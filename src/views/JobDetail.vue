<template>
    <div>
        <h1>Job Details</h1>
        <div class="job-detail">
            <p class="job-id">Job ID: <span> {{ jobId }} </span></p>
            <p class="job-title">Job Title: <span> {{ job.title }} </span></p>
            <p class="job-description">Job Details: <span> {{ job.details }} </span></p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'JobDetail',
    data() {
        return {
            jobId: this.$route.params.id,
            jobs: [
                { title: 'Ninja UX Designer', id: 1, details: ' A highly skilled professional with expertise in creating user-centered designs that blend creativity with functionality.' },
                { title: 'Ninja Web Developer', id: 2, details: 'A Ninja Web Developer is a master of web technologies, skilled at creating dynamic, responsive, and scalable websites and web applications' },
                { title: 'Ninja Vue Developer', id: 3, details: 'A Ninja Vue Developer is an expert in building interactive, high-performing web applications using Vue.js, a progressive JavaScript framework. ' }
            ],
            job: {}
        };
    },
    created() {
        this.job = this.jobs.find(job => job.id == this.jobId);
    }
};
</script>

<style>
h1 {
    text-align: center;
}

.job-detail {
    background-color: #f8fafc;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: 20px auto;
}

.job-detail:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.job-id,
.job-title,
.job-description {
    font-weight: bold;
    font-size: 1.1rem;
    color: #1e293b;
    margin-bottom: 10px;
}

.job-id span,
.job-title span,
.job-description span {
    font-weight: normal;
}
</style>