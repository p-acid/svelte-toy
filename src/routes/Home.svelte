<script>
    import Input from '../components/Input.svelte'

    let inputText = '';
</script>

<h1>당신은 실천하지 않고 있다</h1>
<Input inputText={inputText} placeholderText="당신이 어제 미룬 일은 무엇인가요?" inputHandler={() => console.lop('hello')}/>
