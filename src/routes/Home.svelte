<script>
    import { push } from 'svelte-spa-router'
    import { fly } from 'svelte/transition'
    import Input from '../components/Input.svelte'

    let inputText = '';
</script>


<h1 in:fly={{ y: 100, duration: 1200 }}>당신은 실천하지 않고 있다 🏃</h1>
<p in:fly={{ y: 100, duration: 1200, delay: 500 }}>
    당신은 생각한 일들을 실천하고 있나요?
    <br/>
    생각만 하고 실천하지 않는다면,
    <br/>
    <strong>그것은 아무것도 하지 않은 것과 같습니다.</strong>
</p>
<form on:submit="{(e) => {e.preventDefault(); localStorage.setItem('main', inputText); push('/divide') }}" in:fly={{ y: 100, duration: 1200, delay: 700 }}>
    <Input bind:inputText={inputText} placeholderText="당신이 어제 미룬 일은 무엇인가요?"/>
</form>



<style>
    h1 {
        padding: 14rem 0 0;
        font-size: 3rem;
    }

    p {
        padding: 2.5rem 0;
        font-size: 1.3rem;
        line-height: 2rem;
        text-align: center;
    }
</style>