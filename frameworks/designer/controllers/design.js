// ==========================================================================
// Project:   SC.designController
// ==========================================================================
/*globals SC */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
SC.designController = SC.ObjectController.create(
/** @scope SC.designController.prototype */ {

  contentBinding: 'SC.designsController.selection',
  contentBindingDefault: SC.Binding.single(),
  
  viewSelected: function(){
    var c = this.get('content'), pane, designer, pageController;
    if(c){
      pane = c.get('view');
      if(pane.kindOf && pane.kindOf(SC.View)){
        pageController = SC.designsController.getPath('page.designController');
        designer = pane.get('designer');
        //make this designer the rootDesigner
        if(pageController && designer) {
          designer.set('designIsEnabled', NO);
          pageController.makeRootDesigner(designer);
        }
      }
      else if(SC._Greenhouse){
        SC._Greenhouse.designController.set('content', pane.get('designer'));
        SC._Greenhouse.sendAction('floatInspector');
      }
    }
  }
}) ;
