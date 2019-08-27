var MIN_PAGE = 0;
var MAX_PAGE = 0;

var books = [['Harry Potter 1', 1998, 2432],
			 ['Harry Potter 2', 2000, 2815],
			 ['Harry Potter 3', 2002, 2794],
			 ['Harry Potter 4', 2004, 3068],
			 ['Harry Potter 5', 2006, 2951],
			 ['Harry Potter 6', 2008, 3124],
			 ['Harry Potter 7', 2010, 3862],
			 ['El señor de los anillos 1', 2002, 3471],
			 ['El señor de los anillos 2', 2005, 3954],
			 ['El señor de los anillos 3', 2008, 3386]];

function UploadBooks(){
	var books_length = books.length;
	if(books_length > 0){
		MIN_PAGE = 1;
		MAX_PAGE = books_length;
		var paginator = document.getElementById('paginator');
		if(books_length > 5){
			paginator.innerHTML = paginator.innerHTML + "<div onclick='GetPrevius();' class='page previus'><div>Previus</div></div>";
			paginator.innerHTML = paginator.innerHTML + "<div onclick='ShowBook(this);' id='first'   class='page'><div>1</div></div>";
			paginator.innerHTML = paginator.innerHTML + "<div onclick='ShowBook(this);' id='second'  class='page'><div>2</div></div>";
			paginator.innerHTML = paginator.innerHTML + "<div onclick='ShowBook(this);' id='third'   class='page'><div>3</div></div>";
			paginator.innerHTML = paginator.innerHTML + "<div onclick='ShowBook(this);' id='quarter' class='page'><div>4</div></div>";
			paginator.innerHTML = paginator.innerHTML + "<div onclick='ShowBook(this);' id='fifth'   class='page'><div>5</div></div>";
			paginator.innerHTML = paginator.innerHTML + "<div onclick='GetNext();' class='page next'><div>Next</div></div>";
		}else{
			for(var i=0; i<books_length; i++){
				if(i == 0){
					paginator.innerHTML = paginator.innerHTML + "<div onclick='ShowBook(this);' class='page previus'><div>1</div></div>";
				}else if(i == books_length-1){
					paginator.innerHTML = paginator.innerHTML + "<div onclick='ShowBook(this);' class='page next'><div>" + (i+1) + "</div></div>";
				}else{
					paginator.innerHTML = paginator.innerHTML + "<div onclick='ShowBook(this);' class='page'><div>" + (i+1) + "</div></div>";
				}
			}
		}
	}
}

function GetPrevius(){
	var first = document.getElementById('first');
	var num_first = parseInt(first.childNodes[0].innerHTML);
	if(num_first != MIN_PAGE){
		first.childNodes[0].innerHTML = num_first - 1;
		document.getElementById('second').childNodes[0].innerHTML  = num_first;
		document.getElementById('third').childNodes[0].innerHTML   = num_first + 1;
		document.getElementById('quarter').childNodes[0].innerHTML = num_first + 2;
		document.getElementById('fifth').childNodes[0].innerHTML   = num_first + 3;
	}
}

function GetNext(){
	var fifth = document.getElementById('fifth');
	var num_fifth = parseInt(fifth.childNodes[0].innerHTML);
	if(num_fifth != MAX_PAGE){
		fifth.childNodes[0].innerHTML = num_fifth + 1;
		document.getElementById('quarter').childNodes[0].innerHTML = num_fifth;
		document.getElementById('third').childNodes[0].innerHTML   = num_fifth - 1;
		document.getElementById('second').childNodes[0].innerHTML  = num_fifth - 2;
		document.getElementById('first').childNodes[0].innerHTML   = num_fifth - 3;
	}
}

function ShowBook(index_book){
	index_book = parseInt(index_book.childNodes[0].innerHTML);
	document.getElementById('title_book').innerHTML = "Title: " + books[index_book-1][0];
	document.getElementById('year_book').innerHTML  = "Year: " + books[index_book-1][1];
	document.getElementById('pages_book').innerHTML = "Pages: " + books[index_book-1][2]; 
}

function ClearFieldsBook(){
	document.getElementById('title_book').innerHTML = "Title:";
	document.getElementById('year_book').innerHTML  = "Year:";
	document.getElementById('pages_book').innerHTML = "Pages:"; 
}
