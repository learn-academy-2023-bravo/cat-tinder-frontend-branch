## First Developer (Raymond)

Find your forever branch with Branch, a dating app for trees. 

- Logo and favicon generated using the Dalle AI image generation tool
- Fonts from google fonts
- Footer component to show off the awesome devs who crafted Branch

[navigate to /treeindex] View other single trees in your area. [Click on tree] View a trees profile to learn about what they enjoy, how old they are, see what they look like, and get to know their name. If you notice some out of date information, click edit to fill out a form to update a tree [click edit]. If you know a single tree in your area navigate to the new tree page to get them registered. [navigate to /treenew]

When creating a new tree or updating an existing one Branch is equipped with an image preview feature so you can quickly verify that the image url is correct.

[paste: https://martinshomeandgarden.com/wp-content/uploads/2023/01/fuji-apple-tree-Image.jpg]

Notice if the image extension is removed, the preview image is replaced with an error message.

[remove extension]
[code image preview]

To get the image preview feature to work we used state to hold the validity of the image url. A useeffect is utilized to revalidate the url when it changes. We are then using conditional rendering to display a valid image or notifying of an invalid image.

Next Sam will demonstrate the functionality of Branch.

## Second Developer (Sam)

Since we are here on the create page let's finish making the profile for our tree.

- [add extension back to image url]
- [name: Granny Smith]
- [age: 200]
- [enjoys: Baking apple pies]

(enjoys must be more than 10 chars)

After creating a tree you will be routed to the tree index page. This page will grab all the trees from the database and display them to you. [click on granny] Granny Smith just had a birthday so lets update her profile. [add 1 to her age] She also picked up a new hobby of X. After updating her profile she found a match so lets delete her from Branch. [click granny and edit then delete] 

A functionality feature we are proud of is the ability to quickly navigate between trees. [click tree] These arrow buttons on either side of the page let you navigate to the next and previous tree in the database.

As you can see when you reach the end of the list you will be taken to the first tree.

[code tree show]

Talk about next and previous variables

[navigate to homepage]

This concludes our presentation. If you care about the environment then help trees in your area find the love they deserve.
