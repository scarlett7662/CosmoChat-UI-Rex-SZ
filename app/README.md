# React + Vite
# CosmoChat UI

## Overview:
CosmoChat UI is the frontend application that enables users to engage in chat sessions with an AI chatbot powered by OpenAI's language model. The primary objective is to offer a seamless platform for users to interact with the chatbot, ask questions, and receive responses naturally. It incorporates features such as activity tracking, session ending, and session management.
This is the UI:
![Screenshot 2024-09-09 at 4 44 04 PM](https://github.com/user-attachments/assets/161a654d-6a93-457d-8eec-c36e12f2b24f)

You can also change how do GPT reply you: 
for example, you can ask it to reply you as you're a beginner for the Javascript:

![Screenshot 2024-09-09 at 4 44 48 PM](https://github.com/user-attachments/assets/9b521cc6-2631-4c70-bc6d-6c6551c41690)

Also, you can ask it to reply to you as you're a pirate:

![Screenshot 2024-09-09 at 4 46 35 PM](https://github.com/user-attachments/assets/8d43de31-fef3-42c7-90b2-daf885c674bf)



## Technologies and Tools used:
* React.js
* Axios
* OpenAI

## Available Scripts

In the project directory, we can run:

1. `npm start`:\
Runs the react app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in our browser.\
The page will reload when we make changes.

1. `node ./server.js`:\
Runs the server.js file which start server that will store the chats sessions in `data/db.json` file in json format.
Server will be running on port 3500.

## Project Setup Instructions:
To set up CosmoChatUI, follow these steps:

1. **Clone the repository to your local machine**.
    - To clone run: 
      ```
      git clone https://github.com/Viraj5903/CosmoChatUI.git
      ```

2. **Ensure you have Node.js and npm installed:**
    - Download and install [Node.js](https://nodejs.org/en) if you haven't already.

3. **Navigate to the root directory of the project**: 
    - To navigate to the root directory of the project, run: 
      ```
      cd CosmoChatUI
      ```

4. **Install Dependencies**:
    - To install required dependencies, run: 
      ```
      npm install
      ```

5. **Add your OpenAI API key**:
    - Get your OpenAI API key from [OpenAI](https://platform.openai.com/api-keys)
    - Create a .env file in the root directory of the project.
    - Add the following line to the .env file, replacing {YOUR_API_KEY} with your actual API key:
        ```
        REACT_APP_OPENAI_API_KEY={YOUR_API_KEY}
        
        ```
6. **Run your UI application**:
   - run`npm run dev`:\
     Run the application, open the localhost link to check for any updates.
     
