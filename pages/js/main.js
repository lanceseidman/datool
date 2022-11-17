function getRequest(url,keyValues) {

    console.log(keyValues)
axios.get(url, {
    keyValues
  })
  .then(response => {
    console.log(response.data);
    //console.log(response.data.explanation);
  })
  .catch(error => {
    console.log(error);
  });
}
function addKeyValue() {
    let newID = Math.floor(Math.random() * 100) + 1;
    $("#data-values").append(`
    <div class="grid" id="pair_${newID}">
        <label>
            key
                <input type="text" id="keys" name="keys[]" placeholder="Key" required>
        </label>
        <label>
            value
                <input type="text" id="values" name="values[]" placeholder="Value" required>
        </label>
        <button class="secondary" id="${newID}" onClick="removePair(this.id)" style="max-width: 2vw;text-align: center;">X</a>
    </div>
  `);
  console.log('New API Key/Value\n' + newID)
}
function removePair(str) {
    console.log('Keypair Selected: '+str)
    $("#pair_"+str).remove();
}
function makeRequest() {
    var keys = document.getElementsByName('keys[]');
    var values = document.getElementsByName('values[]');
    let filteredArr,filteredArr2;

      for (var i = 0; i < keys.length; i++) {
          filteredArr = [];

          for (let i=0; i<keys.length; i++) {
              if (keys[i].value !== undefined) {
                  filteredArr.push(keys[i].value);
                  
              }
          }
      }
      
      for (var is = 0; is < values.length; is++) {
          filteredArr2 = [];

          for (let i=0; i<values.length; i++) {
              if (values[i].value !== undefined) {
                  filteredArr2.push(values[i].value);
              }
          }
      }

     function inputJoinArrays(filteredArr, filteredArr2){ 
         const obj = {};  
         filteredArr.forEach((Curr_element, index) => { 
            obj[Curr_element] = filteredArr2[index]}) 
            return obj; 
      }; 
     console.log(JSON.stringify(inputJoinArrays(filteredArr, filteredArr2)));
    //getRequest('http://localhost:3000/posts',params)
}