import eternal_melody_md_file from './project_md/eternal_melody.md'
import liquid_knight_md_file from './project_md/liquid_knight.md'
import dropping_dot_md_file from './project_md/dropping_dot.md'
import ruminating_md_file from './project_md/ruminating.md'

import meowmeow_md_file from './project_md/meowmeow.md'
import ifschool_md_file from './project_md/ifschool.md'
import utopia_md_file from './project_md/utopia.md'
import gameet_md_file from './project_md/gameet.md'

import colorization_md_file from './project_md/line_art_colorization.md'
import pose_generation_md_file from './project_md/image_generation_with_pose.md'
import style_transfer_md_file from './project_md/style_transfer.md'
import weapon_generation_md_file from './project_md/weapon_generation.md'

const GameProjectData = [
    {
        "title": "Liquid Knight",
        "description": "In Liquid Knight, you drive any kinds of cup and drinks inside, and strike others to win. You have to dudge and attack others with your skills and items. \nTo become a true liquid knight!",
        "content": liquid_knight_md_file,
        "image": "/guanweichen/projects/liquidknight/login_2.jpg"
    },
    {
        "title": "Eternal Melody",
        "description": "Eternal Melody is a rhythm rpg. Players have to tap the attack button according to the music. Enjoy the music and BEAT the enemies!",
        "content": eternal_melody_md_file,
        "image": "/guanweichen/projects/eternalmelody/eternal_melody_banner.png"
    },
    {
        "title": "Ruminating",
        "description": "Ruminating is a casual game we made in hackathon. In Ruminating, player can select three foods to eat. Drink some beer and start your Ruminating!",
        "content": ruminating_md_file,
        "image": "/guanweichen/projects/ruminating/ruminating_banner.png"
    },
    {
        "title": "Dropping Dot",
        "description": "A Mobile casual game. Control the dropping ball on the screen and get a higher score. Developed independently.",
        "content": dropping_dot_md_file,
        "image": "/guanweichen/projects/droppingdot/icon.png"
    }
]

const FrontEndProjectData = [
    {
        "title": "Gameet",
        "description": "In Liquid Knight, you drive any kinds of cup and drinks inside, and strike others to win. You have to dudge and attack others with your skills and items. \nTo become a true liquid knight!",
        "content": gameet_md_file,
        "image": "/guanweichen/projects/gameet/logo.png"
    },
    {
        "title": "MeowMeow",
        "description": "A mobile social platform for pet lovers. The main functions Include forum, fundraising, and animal hospital navigation, etc.",
        "content": meowmeow_md_file,
        "image": "/guanweichen/projects/meowmeow/logo2.png"
    },
    {
        "title": "IF-School",
        "description": "Developed independently. IF-School website of National University of Kaohsiung.",
        "content": ifschool_md_file,
        "image": "/guanweichen/projects/ifschool/home.jpg"
    },
    {
        "title": "Utopia",
        "description": "Utopia is a course registration and trade system. Based on blockchain and smart contracts.",
        "content": utopia_md_file,
        "image": "/guanweichen/projects/utopia/courselist.jpg"
    }
]

const AIProjectData = [
    {
        "title": "Line Art Colorization",
        "description": `In this paper, we propose a user-guided line art colorization model that improve color saturation and vividness than previous works.
                        According to the good color quality of StyleGAN’s generating results. We use StyleGAN architecture as the basis. We modify the model architecture by adding conditional control, converting the lines and user hints into style, and then generating the colorization result of the line art through this style. Our method indeed inherits the outstanding color quality of StyleGAN. It has a better saturation and naturalness in colorization results and has a better FID score than previous works.`,
        "content": colorization_md_file,
        "image": '/guanweichen/projects/ai_game_art/line_art_colorization/colorization.png'
    },
    {
        "title": "Image Generation with Pose",
        "description": "In this project, we create a pose-based image generation model for anime character. We modified StyleGAN's architecture that takes pose information as an input condition, and generated anime character image with this pose condition.",
        "content": pose_generation_md_file,
        "image": "/guanweichen/projects/ai_game_art/pose_generation/img14.png"
    },
    {
        "title": "Weapon Generation",
        "description": "In this project, we try to create a weapon generation model for game art inspiration. We fine-tune a DALLE model that can use the text as input, and generate the game weapon which meets the description.",
        "content": weapon_generation_md_file,
        "image": "/guanweichen/projects/ai_game_art/weapon_generation/logo.png",
    },
    {
        "title": "Style Transfer for Anime Character",
        "description": "In this project, we train a swapping autoencoder model for  style transfer for anime character face. We can apply the style from one image into another image with this model.",
        "content": style_transfer_md_file,
        "image": "/guanweichen/projects/ai_game_art/stylemix/1.png"
    },
]


export {GameProjectData, FrontEndProjectData, AIProjectData}