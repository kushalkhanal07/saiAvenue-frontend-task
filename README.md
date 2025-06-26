## Project Name

Dynamic scrollable element



## Overview of my approach

I created dynamic scroll using Next.js where number element are rendered one at a time every 500 milliseconds. The scroll starts with vertical numbers from 1 to 20. After that, a horizontal scroll block appears showing numbers from 20 to 30. Once that section is completed, vertical scrolling continues from 31 onwards. I used hooks like useState to update ui based on how data changes and useEffect is triggered whenever the data in the ui is updated. this hooks are used to dynamically load elements when they come into view and to control their timed rendering.



## Instruction on how to run this project

# 1. Clone the project

git clone https://github.com/kushalkhanal07/saiAvenue-frontend-task.git

# 2. Navigate into the folder

cd your-repo-name

# 3. Install dependencies

npm install

# 4. Start the development server

npm run dev



## Any assumptions or limitations

# 1. Assumptions
✔️All number generation and rendering logic happens purely on the frontend.
✔️User is expected to scroll from top to bottom. Skipping or jumping may disrupt the timing or element generation.
✔️The horizontal scroll block (20–30) is a single fixed range and is not reused or repeated.

# 2. Limitations
✔️It is a demo app so mobile responsiveness is not focused, it mainly focuse on desktop app
✔️If the user scrolls too fast, the rendering might lag slightly due to the 500ms interval
