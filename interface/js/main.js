document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const languages = document.querySelector('input').value
    try {
        const res = await fetch(`https://new-phonology-api.herokuapp.com/api/${languages}`)
        const data = await res.json()
        console.log(data)
    } catch(error) {
        console.log(error)
    }
}

//ADD EJS NOW -- LOOK AT THE ZELLWK @ STEP 13 WILL HAVE TO BE REPLACED, BUT STOPPED AT 18