<script>
    import Input from '../components/Input.svelte'

    let inputText = '';
</script>

<Input inputText={inputText} placeholderText="당신이 어제 미룬 일은 무엇인가요?" inputHandler={() => console.lop('hello')}/>
