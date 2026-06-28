import { portfolioData } from "./data.js";

$("#profile_avatar").attr( "src", portfolioData.profile.avatar );
$("#profile_name").text( portfolioData.profile.name );
$("#profile_role").text( portfolioData.profile.role );