console.log("Email AI Extension    ");

const findComposeToolbar = () => {
   const Selector = ['.btC', '.aDh', '[role="dialog"]' , '.gU.Up'];
  for(const selector of Selector){
    const toolbar = document.querySelector(selector);
    if(toolbar){
      return toolbar;
    }
    return null;
  }
};

const createAIButton = () => {
    const button = document.createElement("div");
    button.className = "T-I J-J5-Ji aoO v7 T-I-atl L3";
    button.style.marginRight = "8px";
    button.innerHTML = 'AI Reply';
    button.setAttribute("role", "button");
    button.setAttribute("data-tooltip", "Generate AI Reply");
    return button;
};


const getEmailContent = () => {
    const selectors = [
      '.h7',
      '.a3s.aiL',
      '.gmail_quote',
      '[role="presentation"]'
    ]

    for (const selector of selectors) {
      const contentElement = document.querySelector(selector);
      if (contentElement) {
        return contentElement.innerText.trim() || contentElement.textContent.trim();
      }
      return null;
    }

}

const injectButton = () => {
  const existingButton = document.querySelector(".ai-button");
  if (existingButton) existingButton.remove();

  const toolbar = findComposeToolbar();
  if (!toolbar) {
    console.log("Compose toolbar not found");
    return;
  }

  const button = createAIButton();
  button.classList.add("ai-button");

  button.addEventListener("click", async () => {
      try {
          button.innerHTML = 'Generating...';
          button.disabled = true;


          const emailContent = getEmailContent();

          const response =  await fetch("http://localhost:8080/api/email/generate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                  emailContent : emailContent,
                   tone : "professional", 
            }),
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const generatedReply = await response.text();

          const composeBox = document.querySelector(
            '[role="textbox"][g_editable="true"]'
          );
          if (composeBox) {
            composeBox.focus();
            document.execCommand("insertText", false, generatedReply);
          }else {
            console.error("Compose box not found");
          }
      } catch (error) {
        console.error("Error generating AI reply:", error);
      }finally {
          button.innerHTML = 'AI Reply';
          button.disabled = false;
      }
  });

  toolbar.insertBefore(button, toolbar.firstChild);
};

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    const addedNodes = Array.from(mutation.addedNodes);
    const hasComposeElement = addedNodes.some(
      (node) =>
        node.nodeType === Node.ELEMENT_NODE &&
        (node.matches('.aDh, .btC, [role="dialog"]') ||
          node.querySelector('.aDh, .btC, [role="dialog"]'))
    );

    if (hasComposeElement) {
      console.log("Compose element found");
      setTimeout(injectButton, 500);
    }
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
