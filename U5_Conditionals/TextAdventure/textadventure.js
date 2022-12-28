alert("You find yourself without any plans today! Your satchel is packed and you are ready to hit the road!")

let foot_or_car = prompt("Do you (1) travel on foot or (2) take the car? Please enter 1 for foot and 2 for car.")

if(foot_or_car == 1) {
    let wendys_or_library = prompt("You have opted for the healthier and environmentally friendly option. However, your destination is restricted by the distance your legs can carry you. Do you walk (1) to the neighborhood Wendy's or (2) to the local library?")
    if(wendys_or_library == 1){
    alert("There are so many options on the menu!");
    let tea_or_lemonade = prompt("The cashier asks if you want (1) sweet tea or (2) lemonade. Which do you choose?")
    if(tea_or_lemonade == 1) {
        alert("Sweet tea is an excellent southern treat! Your choices were optimal and your journey is complete.")
    } else {
        alert("You acquire your lemonade and decide to spend the rest of the day in the sun. Your journey is complete!")
}} else {
    alert("You forgot the library is not open on Sunday. Go home and read the book that's been gathering dust on your nightstand!")
}} 
else {
    let antique_or_book = prompt("You have chosen the option largely unrestricted by mileage. Do you drive (1) to the antique store or (2) to Half Price Books?")
    if(antique_or_book == 1){
        let enter_or_home = prompt("You drive to the antique store but it is closed on Sunday. An old woman, seemingly the owner, kindly offers to let you browse anyway. Do you (1) enter or (2) go back home?")
        if(enter_or_home == 1){
            let follow_or_leave = prompt("The antique store is beautiful, but it doesn't seem to carry anything like the salt and pepper shakers you were looking for. The old woman says there are some in the back. Do you (1) follow her or (2) leave her be?")
            if(follow_or_leave == 1) {
                alert("Curiousity killed the cat, and you as well unfortunately :(. The old woman killed you for your bones. Better luck next time I guess.")
            } else {
                alert("You were a fool to think you had a choice. She is already pulling you in. You follow her despite your refusal, and she kills you for your bones. Better luck next time :[")
            }
        } else {
            alert("You go home to down a Benadryl and take a nap. Nighty Night.")
        }} else {
            let donq_or_thejungle = prompt("You drove to HPB, the home of all good things. Many books interest you, but your top two picks are (1) Don Quixote by Cervantes and (2) The Jungle by Upton Sinclair. Which do you choose?")
        if(donq_or_thejungle == 1){
            alert("Congratulations! You chose one of the greatest adventure novels of all time!")
        } else {
            alert("Congratulations! You chose a remarkably well written and informative piece of media.")
        }}} 
