<template>
    <div class="jobs-page">
        <h1 class="jobs-title">Jobs</h1>
        <div class="jobs-list">
            <div v-for="job in jobs" :key="job.id" class="job-card">
                <router-link :to="'/jobs/' + job.id" class="job-link">
                    {{ job.title }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'JobPage',
    data() {
        return {
            jobs: [
                { title: 'Ninja UX Designer', id: 1, details: ' A highly skilled professional with expertise in creating user-centered designs that blend creativity with functionality.' },
                { title: 'Ninja Web Developer', id: 2, details: 'A Ninja Web Developer is a master of web technologies, skilled at creating dynamic, responsive, and scalable websites and web applications' },
                { title: 'Ninja Vue Developer', id: 3, details: 'A Ninja Vue Developer is an expert in building interactive, high-performing web applications using Vue.js, a progressive JavaScript framework. ' }
            ]
        };
    }
};
</script>

<style scoped>
.jobs-page {
    text-align: center;
    padding: 20px;
}

.jobs-title {
    font-size: 2rem;
    color: #334155;
    font-weight: bold;
}

.jobs-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 20px;
}

.job-card {
    background-color: #f1f5f9;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 15px 30px;
    width: 300px;
}

.job-card:hover {
    background-color: #e2e8f0;
}

.job-link {
    text-decoration: none;
    font-size: 1.5rem;
    color: #1e293b;
    font-weight: 500;
}

.job-link:hover {
    color: #0f172a;
}

@media (max-width:325px) {
    .job-card {
        width: 240px;
    }
}
</style>