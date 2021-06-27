App = {
    load: async () => {
       //Load app...
       console.log("App loading...") 
    }
}

$(() => {
    $(window).load(() => {
        App.load()
    })
})