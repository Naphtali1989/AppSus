    @font - face {
        font - family: roboto;
        src: url('../fonts/Roboto-Black.ttf');
    }

    @font - face {
        font - family: alfa, cursive;
        src: url('../fonts/AlfaSlabOne-Regular.ttf');
    }

    @font - face {
        font - family: sigmar;
        src: url('../fonts/SigmarOne-Regular.ttf');
    }

    *
    {
        box - sizing: border - box;
    }

    body {
        margin: 0;
    }

    a {
        text - decoration: none;
    }

    button {
        cursor: pointer;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        margin: 0;
        font - family: roboto;
    }

    input {
        outline: none;
    }

    .show - menu - btn {
        padding: 1 rem 1 rem 1 rem 0;
        transition: all .33 s;
    }

    .bar1,
    .bar2,
    .bar3 {
        background - color: rgb(141, 141, 141);
        position: relative;
        width: 35 px;
        height: 5 px;
        margin: 6 px 0;
        transition: all 0.83 s;
        z - index: 3;
    }

    body.show - nav.bar1 {
        background: linear - gradient(90 deg, rgb(255, 0, 0) 33 % , rgb(47, 179, 55) 77 % );
        transform: rotate(-45 deg) translate(-9 px, 6 px);
    }

    body.show - nav.bar2 {
        opacity: 0;
    }

    body.show - nav.bar3 {
            background: linear - gradient(90 deg, #ffc000 30 % , #005fff 75%);

        transform: rotate(45deg) translate(-8px, -8px);

    }

    

    @media (min-width:640px) {

        .show-menu-btn {

            margin: 2rem 1rem;

            padding: 0;

        }

    }