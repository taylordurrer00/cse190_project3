
goog.require('Blockly.Blocks');

/************************
 *  BLOCKLY DEFINITIONS  *
 *************************/

Blockly.Blocks['whenrunclicked'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("When RUN is clicked");
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['clearscreen'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Clear Canvas");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['catpose'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Change Cat Pose")
            .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], 
                                                    ["3","3"]]), "catIndex");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['dogpose'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Change Dog Pose")
            .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], 
                                                    ["3","3"]]), "dogIndex");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['animalsay'] = {
    init: function() {
        this.appendValueInput('textToSay')
            .setCheck('String')
            .appendField('Say');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['dogmove'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Move Dog")
            .appendField("x:")
            .appendField(new Blockly.FieldNumber('0'), 'MOVE_DOG_X')
            .appendField("y:")
            .appendField(new Blockly.FieldNumber('0'), 'MOVE_DOG_Y');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['catmove'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Move Cat")
            .appendField("x:")
            .appendField(new Blockly.FieldNumber('0'), 'MOVE_CAT_X')
            .appendField("y:")
            .appendField(new Blockly.FieldNumber('0'), 'MOVE_CAT_Y');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.JavaScript['whenrunclicked'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var blockCode = statements_name;
    return blockCode;
};

Blockly.JavaScript['clearscreen'] = function(block) {
    var blockCode = 'clearCanvas();';
    return blockCode;
};

Blockly.JavaScript['catpose'] = function(block) {
    var dropdown_catindex = block.getFieldValue('catIndex');
    var blockCode = 'updateCatPose(' + dropdown_catindex + ');';
    return blockCode;
};

Blockly.JavaScript['dogpose'] = function(block) {
    var dropdown_dogindex = block.getFieldValue('dogIndex');
    var blockCode = 'updateDogPose(' + dropdown_dogindex + ');';
    return blockCode;
};

Blockly.JavaScript['animalsay'] = function(block) {
    var textInput = Blockly.JavaScript.valueToCode(block, 'textToSay') || '';
    var blockCode = 'say(' + textInput + ');';
    return blockCode;
};

Blockly.JavaScript['dogmove'] = function(block) {
    var dx = block.getFieldValue('MOVE_DOG_X');
    var dy = block.getFieldValue('MOVE_DOG_Y');
    var blockCode = 'moveDog(' + dx + ', ' + dy + ');';
    return blockCode;
};

Blockly.JavaScript['catmove'] = function(block) {
    var dx = block.getFieldValue('MOVE_CAT_X');
    var dy = block.getFieldValue('MOVE_CAT_Y');
    var blockCode = 'moveCat(' + dx + ', ' + dy + ');';
    return blockCode;
};
