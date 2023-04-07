const addNewTransction = () => {
  $("#add-transaction-btn").on("click", () => {
    $("#transaction-modal").removeClass("modal-overlay");
    $("#transaction-modal").addClass("modal-overlay-active");
  });
};

addNewTransction();
