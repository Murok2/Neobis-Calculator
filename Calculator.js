var a, b;
a = "";
b = "";
var sign = "";

function operate()
{
	Label:if (sign === '+') {
		a = String(Number(a) + Number(b))
		document.getElementById('numdisplay').innerHTML = a;
		b = "";
		sign = "";
	} else if (sign !== '-') {
		if (sign === '*') {
			a = String(Number(a) * Number(b))
			document.getElementById('numdisplay').innerHTML = a;
			b = "";
			sign = "";
		} else if (sign === '/') {
			if (b == '0') {
				{
					document.getElementById('numdisplay').innerHTML = "Cannot divide by zero!";
					a = "";
					b = "";
					c = "";
					break Label;
				}
			} else {
				{
					a = String(Number(a) / Number(b))
					document.getElementById('numdisplay').innerHTML = a;
					b = "";
					sign = "";
					break Label;
				}
			}
		}
	} else {
		a = String(Number(a) - Number(b))
		document.getElementById('numdisplay').innerHTML = a;
		b = "";
		sign = "";
	}
}
function perform(m)
{
	if(m=="=")
	{
		if((a!="")&(b!=""))
		{
			operate();
		}
	}
	else if((m=="+")||(m=="-")||(m=="*")||(m=="/"))
	{
		if((a!="")&&(b==""))
		{
			sign=m;
			document.getElementById('numdisplay').innerHTML=a+sign;
		}
		else if((a!="")&&(b!=""))
		{
			operate();
			sign=m;
			document.getElementById('numdisplay').innerHTML=a+sign;
		}
	}
	else
	{
		if(sign=="")
		{
			a=a+m;
			document.getElementById('numdisplay').innerHTML=a;
		}
		else
		{
			b=b+m;
			document.getElementById('numdisplay').innerHTML=a+sign+b;
		}
	}
}

function sperform(m)
{
	switch(m)
	{
		case 'bs':
			if((a!="")&&(sign!=""))
			{
				if(b=="")
				{
					sign="";
					document.getElementById('numdisplay').innerHTML=a;
				}
				else
				{
					var bx= new Array();
					bx=b.split("");
					bx.pop();
					b=bx.join("");
					document.getElementById('numdisplay').innerHTML=a+sign+b;
				}
			}

			else if (!((a != "") && (sign == ""))) {
			} else {
				var ax = new Array();
				ax = a.split("");
				ax.pop();
				a = ax.join("");
				document.getElementById("numdisplay").innerHTML = a;
			}
			break;
	}
}