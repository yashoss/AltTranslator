const GIB_ALPHA =
    "å∫ç∂´ƒ©˙ˆ∆˚¬µ˜øπœ®ß†¨√∑≈¥ΩÅıÇÎ´Ï˝ÓˆÔÒÂ˜Ø∏Œ‰Íˇ¨◊„˛Á¸`¡™£¢∞§¶•ªº–≠“‘«…æ≤≥÷`⁄€‹›ﬁﬂ‡°·‚—±”’»ÚÆ¯˘¿";
const ALPHA =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`1234567890-=[]\\;',./~!@#$%^&*()_+{}|:\"<>?";
const alpha_to_gib = { " ": " " };
const gib_to_alpha = { " ": " " };

for (let i in GIB_ALPHA) {
    gib_to_alpha[GIB_ALPHA[i]] = ALPHA[i];
}

for (let i in ALPHA) {
    alpha_to_gib[ALPHA[i]] = GIB_ALPHA[i];
}

function translateGibberish() {
    const gibberish = document.getElementById("gibberish-input").value;
    let translation = "";
    if (ALPHA.includes(gibberish[0])) {
        translation = atog(gibberish);
    } else {
        translation = gtoa(gibberish);
    }
    if (
        gibberish.replace(/\s/g, "").toLowercase() === "steverocks!" ||
        translation.replace(/\s/g, "").toLowercase() === "steverocks!"
    ) {
        window.location.href = "https://yashoss.github.io/StevePage/";
    }
    document.getElementById("english-out").innerHTML = translation;
}

function atog(str) {
    let translation = "";
    for (let i in str) {
        if (alpha_to_gib[str[i]]) {
            translation += alpha_to_gib[str[i]];
        } else {
            translation += str[i];
        }
    }
    return translation;
}

function gtoa(str) {
    let translation = "";
    for (let i in str) {
        if (gib_to_alpha[str[i]]) {
            translation += gib_to_alpha[str[i]];
        } else {
            translation += str[i];
        }
    }
    return translation;
}
