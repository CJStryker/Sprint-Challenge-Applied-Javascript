// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


function Tabs(tabbie) {
    const newTab = document.createElement('div');

    newTab.classList.add('tab');

    newTab.textContent = tabbie;

    return newTab;
}

const topicCont = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics').then(res => {
    //console.log(res);
    res.data.topics.forEach((tabs) => {
        topicCont.appendChild(Tabs(tabs));
    })
}).catch((err) => {
    console.log(err);
});
