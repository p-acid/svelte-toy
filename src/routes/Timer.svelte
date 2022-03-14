<script>
    import { onDestroy } from 'svelte'
    import { fly } from 'svelte/transition'
    
    const mainTarget = localStorage.getItem('main')
    const tasks = localStorage.getItem('tasks').split(',')
    const limit = parseInt(localStorage.getItem('limit'))

    $: leftTasks = tasks
    $: sec = limit * 60

    $: leftHour = Math.floor(sec / 3600)
    $: leftMin = Math.floor(sec / 60) % 60
    $: leftSec = sec % 60

    const setTime = setInterval(() => sec = sec - 1, 1000)

    const deleteTask = (index) => {
        leftTasks.splice(index, 1);
        leftTasks = [...leftTasks];
    }

    onDestroy(setTime)
</script>

<div in:fly={{y: 100, duration: 1200}}>
    <h1>이제 실행합시다! 👏</h1>
    <h2>{mainTarget}</h2>
</div>

{#if leftTasks.length !== 0 && sec > 0}
<div class="task-block" out:fly={{y: 50, duration: 800}}> 
    <time in:fly={{y: 100, duration: 1200, delay: 400}}>
        {`${leftHour}시 ${leftMin}분 ${leftSec}초`}
    </time>
    
    <ul class="taskList" in:fly={{y: 100, duration: 1200, delay: 800}}>
        {#each leftTasks as task, i}
            <li on:click={() => deleteTask(i)}>
                {task}
            </li>
        {/each}
    </ul>
</div>
{:else if leftTasks.length !== 0 && sec > 0} 
<div class="task-block" in:fly={{y: 100, duration: 1200, delay: 800}}>
    <h1>시간을 모두 사용하였습니다! ⏰</h1>
    <p>원하는 목표였던 위 내용은 이루셨나요?</p>
    <a href="/">미처 못했다면, 남은 일들을 다시 해결해볼까요?</a>
</div>
{:else}
<div class="task-block" in:fly={{y: 100, duration: 1200, delay: 800}}>
    <h1>모든 업무를 마무리했네요! 👍</h1>
    <p>업무들을 통해 위 목표를 이뤘나요?</p>
    <a href="/">다시 새로운 도전을 시작해볼까요?</a>
</div>
{/if}

<style lang="scss">
    h1 {
        padding: 4rem 0 1rem;
        font-size: 3rem;
        text-align: center;
    }

    h2 {
        margin: 1rem 0 1rem;
        text-align: center;
        font-size: 2rem;
        border-bottom: 3px solid gray;
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

    a {
 		text-decoration: none;
  		color: rgb(45, 94, 75);
  		font-weight: bold;
	}

    strong {
        font-weight: bold;
        font-size: 1.4rem;
    }

    .task-block {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    div:last-child {
        margin-top: 1rem;
    }
</style>