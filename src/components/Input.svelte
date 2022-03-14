<script>
    export let inputText;
    export let placeholderText;
</script>

<input bind:value={inputText} placeholder={placeholderText}/>

<style lang="scss">
    input {
        padding: 0.9rem 0.6rem 0.8rem;
        min-width: 500px;
        border-radius: 0.7rem;
        color: white;
        font-size: 0.8rem;
        background-color: #2b2b2b;
        text-align: center;

        &:focus {
            outline: 2px solid #5c5c5c;
        }
    }
</style>
