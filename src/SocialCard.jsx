const SocialCard = ({userData})=> {

    return(
        <div className="card">
            <div className="card_title">
            {userData.name.first} {userData.name.last}
            </div>

            <div className="card_body">
                <div className="card_image">
                    <img src="{userData.picture.medium}" alt="" />
                </div>
            </div>
        </div>  
    )

};

export default SocialCard;