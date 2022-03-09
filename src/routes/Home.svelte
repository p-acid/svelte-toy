<script>
    import Input from '../components/Input.svelte'

    let inputText = '';
</script>

<h1>당신은 실천하지 않고 있다</h1>
<p>
    당신은 생각한 일들을 실천하고 있나요?
    <br/>
    생각만 하고 실천하지 않는다면, 
    <br/>
    그것은 아무것도 하지 않은 것과 같습니다.
</p>
<Input inputText={inputText} placeholderText="당신이 어제 미룬 일은 무엇인가요?" inputHandler={() => console.lop('hello')}/>

<style>
    h1 {
        padding: 15rem 0 1rem;
        font-size: 3rem;
    }

    p {
        padding: 2rem 0 2.5rem;
        font-size: 1.3rem;
        line-height: 2rem;
        text-align: center;
    }
</style>