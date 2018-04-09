		var profileNamesList = [
		"Affenpinscher",
			"Afghan Hound",
 "Airedale Terrier",
 "Alaskan Malamute",
 "American Cocker Spaniel",
 "American Staffordshire Bull Terrier",
 "Anatolian Shepherd Dog",
 "Australian Cattle Dog",
 "Australian Kelpie",
 "Australian Shepherd Dog",
 "Australian Silky Terrier",
 "Australian Terrier",
 "Basenji",
 "Basset Fauve de Bretagne",
 "Basset Hound",
 "Beagle",
 "Bearded Collie",
 "Bedlington Terrier",
 "Belgian Shepherd Groenendael",
 "Belgian Shepherd Dog Laekenois",
 "Belgian Shepherd Dog Malinois",
 "Belgian Shepherd Tervueren",
 "Bernese Mountain Dog",
 "Bichon Frise",
 "Bloodhound",
 "Border Collie",
 "Border Terrier",
 "Borzoi",
 "Boston Terrier",
 "Bouvier des Flandres",
  "Boxer Dog",
"Bracco Italiano",
 "Briard",
 "Brittany Dog",
 "Bulldogs",
 "Bullmastiff",
 "Bull Terrier",
 "Cairn Terrier",
 "Cavalier King Charles Spaniel",
 "Cavoodle",
 "Cesky Terrier",
 "Chesapeake Bay Retriever",
 "Chihuahua (Smooth Coat)",
 "Chinese Crested",
 "Chow Chow",
 "Chow Chow (Smooth)",
 "Clumber Spaniel",
 "Collie (Rough)",
 "Collie (Smooth)",
 "Curly-Coated Retriever",
 "Dachshund (Miniature Long Haired)",
 "Dachshund (Miniature Smooth)",
 "Dachshund (Miniature Wire Haired)",
 "Dachshund (Smooth Haired)",
 "Dachshund (Wire Haired)",
 "Dalmatian",
 "Dandie Dinmont Terrier",
 "Deerhound",
 "Dobermann Pinscher",
 "Dogue de Bordeaux",
 "English Cocker Spaniel",
 "English Setter",
 "English Springer Spaniel",
 "English Toy Terrier (Black and Tan)",
 "English Mastiff",
 "Field Spaniel",
 "Finnish Lapphund",
 "Finnish Spitz",
 "Flat-Coated Retriever",
 "Foxhound",
 "Fox Terrier Smooth Coat",
 "Fox Terrier Wire Coat",
 "French Bulldog",
 "German Shepherd Dog",
 "German Short-Haired Pointer",
 "German Spitz Klein",
 "German Wire-Haired Pointer",
 "Goldendoodle",
 "Golden Retriever",
 "Gordon Setter",
 "Great Dane",
 "Great Pyrenees",
 "Greyhound Dogs",
 "Great Pyrenean Mountain Dog",
 "Harrier Hound",
 "Havanese",
 "Hungarian Puli",
 "Hungarian Vizsla",
 "Hungarian Wire-Haired Vizsla",
 "Ibizan Hound",
 "Irish Setter",
 "Irish Terrier",
 "Irish Water Spaniel",
 "Irish Wolfhound",
 "Italian Greyhound",
 "Japanese Akita",
 "Japanese Chin",
 "Japanese Spitz",
 "Jug",
 "Keeshond",
 "Kerry Blue Terrier",
 "King Charles Spaniel",
 "Komondor",
 "Labradoodle",
 "Labrador Retriever",
 "Lakeland Terrier",
 "Leonberger",
 "Lhasa Apso",
 "Lowchen",
 "Miniature Bull Terrier",
 "Maltese",
 "Manchester Terrier",
 "Maremma Sheepdog",
 "Moodle",
 "Neapolitan Mastiff",
 "Newfoundland",
 "Norfolk Terrier",
 "Norwich Terrier",
 "Nova Scotia Duck Tolling Retriever",
 "Old English Sheepdog",
 "Papillon",
 "Parson Russell Terrier",
 "Pharaoh Hound",
 "Pinscher-Miniature",
 "Pointer Dog",
 "Pomeranian",
 "Poodle Miniature",
 "Poodle Standard",
 "Poodle Toy",
 "Portuguese Water Dog",
 "Pugs",
 "Pugalier",
 "Rhodesian Ridgeback",
 "Rottweiler",
 "Saluki",
 "Samoyed",
 "Schipperke",
 "Schnauzer Giant",
 "Schnauzer Miniature",
 "Schnauzer Standard",
 "Schnoodle",
 "Scoodle",
 "Scottish Terrier",
 "Shar Pei",
 "Shetland Sheepdog",
 "Shiba Inu",
 "Shih Tzu",
 "Siberian Husky",
 "Skye Terrier",
 "Sloughi",
 "Soft Coated Wheaten Terrier",
 "Spoodle",
 "Staffordshire Bull Terrier",
 "St Bernard Dog",
 "Sussex Spaniel",
 "Swedish Vallhund",
 "Tenterfield Terrier",
 "Tibetan Mastiff",
 "Tibetan Spaniel",
 "Tibetan Terrier",
 "Weimaraner",
 "Welsh Corgi (Cardigan)",
 "Welsh Corgi (Pembroke)",
 "Welsh Springer Spaniel",
 "Welsh Terrier",
 "West Highland White Terrier",
 "Whippet",
 "Yorkshire Terrier"

		];
		var selectedProfiles=[];
		var clicked = false;
		function toggle(){
			if(clicked === false){
				clicked = true;
			} else{
				clicked = false;
			}
			return clicked;
		}
		function showOptions(id){
			var show = toggle();
			if(show === true){
				document.getElementById(id).style.display="block";
			} else {
				document.getElementById(id).style.display="none";
			}
		}
		function addOnClicks(list){
			var listItems = list.getElementsByTagName('li');
			for(var i=0, len=listItems.length; i<len; i++){
				listItems[i].onclick = function(i){
					var i = parseInt(this.attributes.i.value);
					if(listItems[i].getAttribute('selected') === "true"){
						listItems[i].setAttribute('selected', false);
						var end = listItems[i].innerHTML.length;
						listItems[i].innerHTML = listItems[i].innerHTML.slice(0, end-1);
					} else {
						listItems[i].setAttribute('selected', true);
						listItems[i].innerHTML = listItems[i].innerHTML + "&#10004";
					}
					console.log(listItems[i].innerHTML+ " clicked");
				};
			}
			return list;
		}
		function styleListItem(listItem, attrib){
			listItem.style = attrib;
		}
		function styleList(list){
			list.style = "list-style: none";
			list.style = "padding-left:0px;"
			return list;
		}
		function addToList(list, item, i){
			var listItem;
			var text;
			listItem = document.createElement("LI");
			listItem.className = "listItem";
			text = document.createTextNode(item);
			listItem.setAttribute('selected', false);
			listItem.setAttribute('i', i);
			listItem.appendChild(text);
			list.appendChild(listItem);
			return list;
		}
		function createList(){
			var container = document.getElementById('optionsMenu');
			var list = document.createElement("UL");
			container.appendChild(list);
			return list;
		}
		function loadProfilesButton(){
			var list = createList();
			for(var i=0, len = profileNamesList.length; i < len; i++){
				list = addToList(list, profileNamesList[i], i);
			}
			list = addOnClicks(list);
			list = styleList(list);
		}
		loadProfilesButton();