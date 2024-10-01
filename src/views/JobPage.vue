<template>
    <div>
        <div v-if="!JobDetailPage" class="jobs-page">
            <h1 class="jobs-title">Jobs</h1>
            <div>
                <div class="jobs-list">
                    <div v-for="job in jobs" :key="job.id" class="job-card">
                        <router-link :to="`/jobs/${job.id}`" class="job-link">
                            <div class="job-card-content">
                                {{ job.title }}
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
import JobsData from '../data/jobs.json';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: 'JobPage',
    data() {
        return {
            jobs: JobsData
        };
    },
    setup() {
        const route = useRoute();
        const JobDetailPage = computed(() => {
            return route.name === 'JobDetail';
        });

        return { JobDetailPage };
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

.job-card-content {
    font-size: 1.5rem;
    color: #1e293b;
    font-weight: 500;
}

.job-card-content:hover {
    color: #0f172a;
}

@media (max-width:325px) {
    .job-card {
        width: 240px;
    }
}
</style>
