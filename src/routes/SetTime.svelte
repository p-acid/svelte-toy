<script>
    import { push } from 'svelte-spa-router';
    import { fly } from 'svelte/transition'

    import Button from '../components/Button.svelte'

    let limit = 0;

    const goNext = () => {
        if (limit > 500) limit = 500

        localStorage.setItem('limit', limit)
        push('/timer')
    }
</script>

<div in:fly={{y: 100, duration: 1200}}>
    <h1>이제 마감 시간을 정해봅시다! ⏰</h1>
    <h2>마감 시간을 정한다면,<br/>보다 더 빠르게<br/>업무를 마무리 할 수 있을 것입니다.</h2>
</div>

<p in:fly={{y: 100, duration: 1200, delay: 700}}>
    입력은 <strong>분 단위</strong>로 가능하고,
    <br/>
    <strong>500 보다 높은 값</strong>을 입력하면
    <br/>
    <strong>자동으로 500분이 설정</strong>됩니다.
</p>

<div class="input-box" in:fly={{y: 100, duration: 1200, delay: 800}}>
    <input bind:value={limit} type="number" min={0} max={500}>
    분
</div>

<p in:fly={{y: 100, duration: 1200, delay: 1200}}>
    아직 입력하실 세부 목록이 남으셨나요?
    <br/>
    <a href="#/divide">이전 페이지</a>로 돌아가서 다시 작성하세요
</p>

<div class="button-wrapper" in:fly={{y: 100, duration: 1200, delay: 1200}}>
    <Button disabled={limit === 0} onClickHandler={() => goNext()}>할 일 시작!</Button>
</div>

<style lang="scss">
    h1 {
        padding: 4rem 0 1rem;
        font-size: 3rem;
    }

    h2 {
        margin: 1rem 0 1rem;
        text-align: center;
        font-size: 2rem;
        line-height: 2.5rem;
    }

    input {
        margin: 2rem 0;
        padding: 1rem;
        text-align: center;
        border-radius: 1rem;
        color: whitesmoke;
        background-color: gray;
    }

    p {
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

    .input-box {
        font-size: 3rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .button-wrapper {
        margin-top: 3rem;
    }
</style>