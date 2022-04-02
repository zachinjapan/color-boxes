# color-boxes

# live site:  https://color-boxes-wow.netlify.app/

# how to run
1. clone repo
2.  run "npm i" in the base dir. 
3.  run "npm start" in the base dir 

All boxes are responsive, and the grid layout remains intact if more content is added to the boxes.

The box and component CSS selectors are shared. each box has a dynamic "box-#" style which is assigned to the grid area 
and there are two unique main-1 main-2 sections.

I decided to go with CSS-grid the whole time rather than switching between a flex layout to keep things clean.

The CSS is mobile-first, and the color functions are imported from a utils folder.

The entire project uses TypeScript.
