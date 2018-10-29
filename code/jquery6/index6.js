$(document).ready(() => {
    $('#get-data').click(() => {
        getAllData();
    })

    $("button").click(function(){
        $("p").hide("slow", function(){
            alert("The paragraph is now hidden");
        });
    });
})

let getAllData = () => {
    console.log("making request");

    $.ajax({
        type:'GET', //request type GET, POST, PUT
        dataType:'json', // requesting datatype
        // async: true,
        url: 'astros.json', // URL of getting data
        success: (data) => { // in case of success response
            console.log(data)
            let allPeople = data.people;
            for(person of allPeople){
                let tempRow = `<div class="row">
                                    <div class="col">${person.name}</div>
                                    <div class="col">${person.craft}</div>
                                </div>`
                $("#showData").append(tempRow); // placing data in division with id
            }
        },
        error: (err) => {  // in case of error response
            console.log("some error occured");
            // console.log(err.responseJSON.error.message)
        },
        timeout:3000, // this is in milli seconds
        beforeSend: () => {
            // you can use a loader here
        },
        complete: () => {
            // what you want to do while request is completed
        }
    }); // end of AJAX request
} // end of getAllData
