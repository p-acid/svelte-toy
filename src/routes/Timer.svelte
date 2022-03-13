<script>
    import { onDestroy } from 'svelte'
    import { fly } from 'svelte/transition'
    
    const mainTarget = localStorage.getItem('main')
    const tasks = localStorage.getItem('tasks').split(',')
    const limit = parseInt(localStorage.getItem('limit'))

    $: sec = limit * 60

    $: leftHour = Math.floor(sec / 3600)
    $: leftMin = Math.floor(sec / 60) % 60
    $: leftSec = sec % 60


    const setTime = setInterval(() => sec = sec - 1, 1000)

    onDestroy(setTime)
</script>

<div in:fly={{y: 100, duration: 1200}}>
    <h1>이제 실행합시다! 👏</h1>
    <h2>{mainTarget}</h2>
</div>

<time in:fly={{y: 100, duration: 1200, delay: 400}}>
    {`${leftHour}시 ${leftMin}분 ${leftSec}초`}
</time>


<ul class="taskList" in:fly={{y: 100, duration: 1200, delay: 800}}>
    {#each tasks as task, i}
        <li>{task}</li>
    {/each}
</ul>


<style lang="scss">
    h1 {
        padding: 7rem 0 1rem;
        font-size: 3rem;
        text-align: center;
    }

    h2 {
        margin: 1rem 0 1rem;
        text-align: center;
        font-size: 2rem;
        border-bottom: 3px solid gray;
    }

    h3 {
        margin: 0.5rem 0;
        font-size: 1.5rem;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    ul {
        margin-top: 1rem;
        padding: 1rem;
        width: 400px;
        height: 300px;
        overflow: scroll;
        border: 5px solid #9c9c9c;
        border-radius: 0.7rem;
        text-align: center;
        background-color: gray;
    }

    li {
        margin: 1rem 0;
        padding: 0.7rem 0 0.5rem;
        border-radius: 0.7rem;
        font-size: 0.8rem;
        color: gray;
        background-color: lightgray;
        cursor: pointer;

        &:first-child {
            margin-top: 0;
        }

        &:hover {
            opacity: 0.9;
        }

        &:active {
            opacity: 0.8;
        }
    }

    p {
        padding: 1rem 0 1rem;
        font-size: 1.3rem;
        line-height: 2rem;
        text-align: center;
    }

    time {
        margin: 2rem 0;
        font-size: 4rem;
        font-weight: bold;
        color: #2a5535;
    }

    div:last-child {
        margin-top: 1rem;
    }
</style>