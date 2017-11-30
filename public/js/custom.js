$(document).ready(() => {
  $('.button-collapse').sideNav();

  $('select').material_select();

  if($('textarea[name="body"]').length > 0){
    CKEDITOR.replace('body', {
      plugins: 'wysiwygarea,toolbar,basicstyles,link'
    });
  }
});