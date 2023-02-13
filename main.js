var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","http://clipart-library.com/newimages/dad-clip-art-2.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg" , "https://previews.123rf.com/images/jemastock/jemastock2005/jemastock200505420/147682749-happy-young-boy-teenager-character-vector-illustration-design.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXvchkM1k0_k9k6l_aC_YYzJia3qs7MwoPdkvcb_pvd3YE0CM&s"];
var names = ["Family Book","Satya", "Subha", "Siddharth", "Shourya"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
