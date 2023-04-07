const closeTransactionModal = () => {
  $("#close-transaction-modal").on("click", () => {
    $("#transaction-modal").removeClass("modal-overlay-active");
    $("#transaction-modal").addClass("modal-overlay");
  });
};

$(function () {
  closeTransactionModal();
});
