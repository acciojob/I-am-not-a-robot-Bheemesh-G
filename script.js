//your code here


const images = document.querySelectorAll('img');
const resetButton = document.getElementById('reset');
const verifyButton = document.getElementById('verify');
let imagesList = [];

let count =0;
images.forEach(image=>{
	image.addEventListener('click',(event)=>{
		if (imagesList.length === 0) {
                imagesList.push(image.className);
                count++;
            } 
            else if (imagesList.length<2) {
                imagesList.push(image.className);
				if(imagesList[0] !== image.className)
				{
					count++;
				}
            }
		else{
				count++;
			}
		resetButton.style.display = "block";
		image.style.borderColor = "#1ABCFA";
		if(count===2)
		{
			verifyButton.style.display = "block"
		}else{
			verifyButton.style.display = "none";
		}	
	})
});

resetButton.addEventListener('click',()=>{
	resetButton.style.display = "none";
	count=0;
	imagesList=[];
	images.forEach(image=>{
		image.style.borderColor="#555555";
	});
	verifyButton.style.display="none";
	document.getElementById('para').textContent='';
});

verifyButton.addEventListener('click',()=>{
	if(imagesList.length===2 && (imagesList[0]===imagesList[1]))
		{
			document.getElementById('para').textContent="You are a human. Congratulations!.";
		}
		else if(imagesList.length===2 && (imagesList[0]!==imagesList[1]))
		{
			document.getElementById('para').textContent="We can't verify you as a human. You selected the non-identical tiles."
		}
})




