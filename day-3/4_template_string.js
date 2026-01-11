
const content = "Hello "

const htmlContent = 
            '<html>'+
            '<head>'+
            '<title>home</title>'+
            '</head>'+
            '<body>'+ content +'</body>'+
            '</html>'

console.log(htmlContent);




const htmlContentNew = 
            `<html>
            <head>
            <title>home</title>
            </head>
            <body>Welcome to my page
            ${content}
            ${5+3}
            </body>
            </html>`

console.log(htmlContentNew);