<template>
    <div class="page-not-found-container">
        <h1 class="page-not-found-title">404 - Page Not Found</h1>
        <p class="page-not-found-message">The page you are looking for does not exist.</p>
        <a href="/" class="home-link">Go back to Home</a>
    </div>
</template>

<script>
export default {
    name: 'PageNotFound',
};
</script>

<style scoped>
.page-not-found-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #f39c12, #8e44ad);
    color: white;
    animation: fadeIn 1.5s ease-in-out;
}


.page-not-found-title {
    font-size: 4em;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    animation: slideIn 1s ease-in-out;
    margin-bottom: 20px;
    position: relative;
}

.page-not-found-title::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: white;
    bottom: -10px;
    left: 0;
    animation: underlineExpand 1s ease-out forwards;
}


.page-not-found-message {
    font-size: 1.5em;
    margin-bottom: 30px;
    opacity: 0;
    animation: fadeInUp 1.5s ease forwards;
    animation-delay: 0.5s;
}


.home-link {
    text-decoration: none;
    color: white;
    border: 2px solid white;
    padding: 10px 20px;
    font-size: 1.2em;
    letter-spacing: 1px;
    border-radius: 50px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.home-link:hover {
    background-color: white;
    color: #8e44ad;
    transform: scale(1.05);
}

/* Animations */
@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes slideIn {
    0% {
        transform: translateY(-100px);
        opacity: 0;
    }

    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes underlineExpand {
    0% {
        width: 0;
    }

    100% {
        width: 100%;
    }
}
</style>