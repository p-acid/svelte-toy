<script>
    import { push } from 'svelte-spa-router';
    import { fly } from 'svelte/transition'

    import Input from '../components/Input.svelte'
    import Button from '../components/Button.svelte'

    const mainTarget = localStorage.getItem('main')

    let tasks = []
    let inputText = ''
    $: disabled = tasks.length === 0

    const addTask = (e) => {
        if (!inputText) return

        e.preventDefault();
        tasks = [
            ...tasks, 
            inputText
        ];
        inputText = '';
    }

    const deleteTask = (index) => {
        tasks.splice(index, 1);
        tasks = [...tasks];
    }

    const goNext = () => {
        localStorage.setItem('tasks', tasks.join(','))
        push('/set-time')
    }
</script>

<div in:fly={{y: 100, duration: 1200}}>
    <h1>아래가 당신의 목표인가요? 🤔</h1>
    <h2>{mainTarget}</h2>
</div>
<p in:fly={{y: 100, duration: 1200, delay: 500}}>아니라면 <a href="/">이전 페이지</a>로 돌아가서 다시 작성하세요</p>

<div in:fly={{y: 100, duration: 1200, delay: 800}}>
    <h3>맞다면 해당 목표를 위해 할 일을 세분화 해봅시다!</h3>
    <p>아이템을 <strong>클릭</strong>하면 할 일이 사라집니다.</p>
</div>

<form in:fly={{y: 100, duration: 1200, delay: 800}} on:submit="{(e) => addTask(e)}">
    <ul class="taskList">
        {#each tasks as task, i}
            <li on:click={() => deleteTask(i)}>{task}</li>
        {/each}
    </ul>
    <Input bind:inputText={inputText} placeholderText="해당 목표를 위해 당장 오늘 실천할 일을 적어주세요!" />
</form>

<div in:fly={{y: 100, duration: 1200, delay: 800}}>
    <Button disabled={disabled} onClickHandler={() => goNext()}>다음으로!</Button>
</div>




<style lang="scss">
    h1 {
        padding: 7rem 0 1rem;
        font-size: 3rem;
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

    a {
 		text-decoration: none;
  		color: rgb(45, 94, 75);
  		font-weight: bold;
	}

    strong {
        font-weight: bold;
        font-size: 1.4rem;
    }

    div:last-child {
        margin-top: 1rem;
    }
</style>