import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as d3 from 'd3';
import { FormControl } from '@angular/forms';

class dataType {
  name: string;
  children?: dataType[];
  count?: number;
  // value() {
  //   return (this.children) ? this.children.length : 0;
  // }
}

var treeData: dataType = {
  "name": "Global Product Management",
  "count": 239,
  "children": [{
      "name": "FY20",
      "count": 135,
      "children": [{
          "name": "Global FI",
          "count": 6,
          "children": [
            {
              "name": "Stuart Lingard",
              "count": 4,
              "children": [
                {
                  "name": "IAS",
                  "count": 2
                },
                {
                  "name": "UAS",
                  "count": 2
                }
              ]
            },
            {
              "name": "Grace Cheng",
              "count": 2,
              "children": [
                {
                  "name": "IAS",
                  "count": 1
                },
                {
                  "name": "UAS",
                  "count": 1
                }
              ]
            }
          ]
          
        },
        {
          "name": "US FI",
          "count": 26,
          "children": [
            {
              "name": "Josh Monroe",
              "count": 11,
              "children": [
                {
                  "name": "IAS",
                  "count": 1
                },
                {
                  "name": "UAS",
                  "count": 10
                }
              ]
            },
            {
              "name": "Josh Monroe",
              "count": 15,
              "children": [
                {
                  "name": "IAS",
                  "count": 5
                },
                {
                  "name": "UAS",
                  "count": 10
                }
              ]
            }
          ]
        },
        {
          "name": "Solutions",
          "count": 77,
          "children": [
            {
              "name": "Amy Leung",
              "count": 7,
              "children": [
                {
                  "name": "IAS",
                  "count": 2
                },
                {
                  "name": "UAS",
                  "count": 5
                }
              ]
            },
            {
              "name": "Josh Monroe",
              "count": 11,
              "children": [
                {
                  "name": "IAS",
                  "count": 1
                },
                {
                  "name": "UAS",
                  "count": 10
                }
              ]
            },
            {
              "name": "Erik Einertson",
              "count": 6,
              "children": [
                {
                  "name": "IAS",
                  "count": 3
                },
                {
                  "name": "UAS",
                  "count": 3
                }
              ]
            },
            {
              "name": "Kelsey Denmark",
              "count": 21,
              "children": [
                {
                  "name": "IAS",
                  "count": 16
                },
                {
                  "name": "UAS",
                  "count": 5
                }
              ]
            },
            {
              "name": "Kerry Dunn",
              "count": 18,
              "children": [
                {
                  "name": "IAS",
                  "count": 17
                },
                {
                  "name": "UAS",
                  "count": 1
                }
              ]
            },
            {
              "name": "Kristyn Ikeda",
              "count": 9,
              "children": [
                {
                  "name": "IAS",
                  "count": 9
                },
                {
                  "name": "UAS",
                  "count": 0
                }
              ]
            },
            {
              "name": "Yuliya Shlychkova",
              "count": 16,
              "children": [
                {
                  "name": "IAS",
                  "count": 9
                },
                {
                  "name": "UAS",
                  "count": 7
                }
              ]
            },
          ]
        },
        {
          "name": "Alternatives",
          "count": 26,
          "children": [
            {
              "name": "Jonathan Connolly",
              "count": 7,
              "children": [
                {
                  "name": "IAS",
                  "count": 4
                },
                {
                  "name": "UAS",
                  "count": 3
                }
              ]
            },
            {
              "name": "Karim Simplis",
              "count": 7,
              "children": [
                {
                  "name": "IAS",
                  "count": 0
                },
                {
                  "name": "UAS",
                  "count": 7
                }
              ]
            },
            {
              "name": "Kathleen Flores",
              "count": 3,
              "children": [
                {
                  "name": "IAS",
                  "count": 2
                },
                {
                  "name": "UAS",
                  "count": 1
                }
              ]
            },
            {
              "name": "Max Corvin",
              "count": 8,
              "children": [
                {
                  "name": "IAS",
                  "count": 4
                },
                {
                  "name": "UAS",
                  "count": 4
                }
              ]
            },
          ]
        }
      ]
    },
    {
      "name": "FY19",
      "count": 104,
      "children": [
        {
          "name": "Solutions",
          "count": 78,
          "children": [
            {
              "name": "Amy Leung",
              "count": 7,
              "children": [
                {
                  "name": "IAS",
                  "count": 2
                },
                {
                  "name": "UAS",
                  "count": 5
                }
              ]
            },
            {
              "name": "Josh Monroe",
              "count": 11,
              "children": [
                {
                  "name": "IAS",
                  "count": 1
                },
                {
                  "name": "UAS",
                  "count": 10
                }
              ]
            },
            {
              "name": "Erik Einertson",
              "count": 6,
              "children": [
                {
                  "name": "IAS",
                  "count": 3
                },
                {
                  "name": "UAS",
                  "count": 3
                }
              ]
            },
            {
              "name": "Kelsey Denmark",
              "count": 21,
              "children": [
                {
                  "name": "IAS",
                  "count": 16
                },
                {
                  "name": "UAS",
                  "count": 5
                }
              ]
            },
            {
              "name": "Kerry Dunn",
              "count": 18,
              "children": [
                {
                  "name": "IAS",
                  "count": 17
                },
                {
                  "name": "UAS",
                  "count": 1
                }
              ]
            },
            {
              "name": "Kristyn Ikeda",
              "count": 9,
              "children": [
                {
                  "name": "IAS",
                  "count": 9
                },
                {
                  "name": "UAS",
                  "count": 0
                }
              ]
            },
            {
              "name": "Yuliya Shlychkova",
              "count": 16,
              "children": [
                {
                  "name": "IAS",
                  "count": 9
                },
                {
                  "name": "UAS",
                  "count": 7
                }
              ]
            },
          ]
        },
        {
          "name": "Alternatives",
          "count": 26,
          "children": [
            {
              "name": "Jonathan Connolly",
              "count": 7,
              "children": [
                {
                  "name": "IAS",
                  "count": 4
                },
                {
                  "name": "UAS",
                  "count": 3
                }
              ]
            },
            {
              "name": "Karim Simplis",
              "count": 7,
              "children": [
                {
                  "name": "IAS",
                  "count": 0
                },
                {
                  "name": "UAS",
                  "count": 7
                }
              ]
            },
            {
              "name": "Kathleen Flores",
              "count": 3,
              "children": [
                {
                  "name": "IAS",
                  "count": 2
                },
                {
                  "name": "UAS",
                  "count": 1
                }
              ]
            },
            {
              "name": "Max Corvin",
              "count": 8,
              "children": [
                {
                  "name": "IAS",
                  "count": 4
                },
                {
                  "name": "UAS",
                  "count": 4
                }
              ]
            },
          ]
        }
      ]
    },
  ]
};

@Component({
  selector: 'app-lineage',
  templateUrl: './lineage.component.html',
  styleUrls: ['./lineage.component.css']
})
export class LineageComponent implements OnInit {
  allGPM = [
    {label: 'Global Product Management - FY20', value: 'FY20'}, 
    {label: 'Global Product Management - FY19', value: 'FY19'}
  ]
  gpm = this.allGPM[0].value;
  data: any = treeData.children[0];

  filterData() {
    console.log(this.gpm)
    this.data = treeData.children.find(child => child.name === this.gpm);
    this.rootAssign();
    this.update(this.root);
  }

  @ViewChild('tree') private chartContainer: ElementRef;

  margin = { top: 20, right: 90, bottom: 30, left: 90 };
  width = 960 - this.margin.left - this.margin.right;
  height = 600 - this.margin.top - this.margin.bottom;

  i = 0;
  duration = 750;
  root: any;

  treemap = d3.tree().size([this.height, this.width]);

  element;

  svg;
  ngOnInit(): void {
    this.element = this.chartContainer.nativeElement;
    this.svg = d3.select(this.element).append("svg")
    .attr("width", "50%")
    .attr("height", this.height + this.margin.top + this.margin.bottom)
    .append("g")
    .attr("transform", "translate("
      + this.margin.left + "," + this.margin.top + ")");
    console.log(this.chartContainer);
    this.rootAssign();
    this.update(this.root);
  }

  rootAssign = () => {
    // Assigns parent, children, height, depth
    this.root = d3.hierarchy(this.data, function (d: any) {
      return d.children;
    });
    this.root.x0 = this.height / 2;
    this.root.y0 = 0;

    // Collapse after the second level
    this.root.children.forEach(this.collapse);
  }

  collapse = (d) => {
    if (d.children) {
      d._children = d.children
      d._children.forEach(t => this.collapse(t))
      d.children = null
    }
  }

  update = (source) => {

    // Assigns the x and y position for the nodes
    let treeData = this.treemap(this.root);

    // Compute the new tree layout.
    let nodes = treeData.descendants(),
      links = treeData.descendants().slice(1);

    // Normalize for fixed-depth.
    nodes.forEach(function (d) {
      d.y = d.depth * 180
    });

    // ****************** Nodes section ***************************

    // Update the nodes...
    let node: any = this.svg.selectAll('g.node')
      .data(nodes, (d: any) => {
        return d.id || (d.id = ++this.i);
      });

    // Enter any new modes at the parent's previous position.
    let nodeEnter = node.enter().append('g')
      .attr('class', 'node')
      .attr("transform", function (d) {
        return "translate(" + source.y0 + "," + source.x0 + ")";
      })
      .on('click', this.click);

    // Add Circle for the nodes
    nodeEnter.append('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style("fill", function (d: any) {
        return d._children ? "lightsteelblue" : "#fff";
      });

    // Add labels for the nodes
    nodeEnter.append('text')
      .attr("dy", ".35em")
      .attr("x", function (d: any) {
        return d.children || d._children ? -13 : 13;
      })
      .attr("whitespace", "break-spaces")
      .attr("text-anchor", function (d: any) {
        return d.children || d._children ? "end" : "start";
      })
      .text(function (d: any) {
        // return (d.data.name + (d.data.children) ? d.data.children.length + "" : "0");
        return getLabel(d);
      });

      function getLabel(d) {
        if(!d.data.count) {
          return `${d.data.name}: (${0})` 
        }

        return `${d.data.name}: (${d.data.count})` 
      }

    // UPDATE
    let nodeUpdate = nodeEnter.merge(node);

    // Transition to the proper position for the node
    nodeUpdate.transition()
      .duration(this.duration)
      .attr("transform", function (d) {
        return "translate(" + d.y + "," + d.x + ")";
      });

    // Update the node attributes and style
    nodeUpdate.select('circle.node')
      .attr('r', 10)
      .style("fill", function (d) {
        return d._children ? "lightsteelblue" : "#fff";
      })
      .attr('cursor', 'pointer');


    // Remove any exiting nodes
    let nodeExit = node.exit().transition()
      .duration(this.duration)
      .attr("transform", function (d) {
        return "translate(" + source.y + "," + source.x + ")";
      })
      .remove();

    // On exit reduce the node circles size to 0
    nodeExit.select('circle')
      .attr('r', 1e-6);

    // On exit reduce the opacity of text labels
    nodeExit.select('text')
      .style('fill-opacity', 1e-6)
      .style('font-family', '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif');

    // ****************** links section ***************************

    // Update the links...
    let link: any = this.svg.selectAll('path.link')
      .data(links, function (d: any) {
        return d.id;
      });

    // Enter any new links at the parent's previous position.
    let linkEnter = link.enter().insert('path', "g")
      .attr("class", "link")
      .attr('d', function (d) {
        let o = {
          x: source.x0,
          y: source.y0
        }
        return diagonal(o, o)
      });

    // UPDATE
    let linkUpdate = linkEnter.merge(link);

    // Transition back to the parent element position
    linkUpdate.transition()
      .duration(this.duration)
      .attr('d', function (d) {
        return diagonal(d, d.parent)
      });

    // Remove any exiting links
    let linkExit = link.exit().transition()
      .duration(this.duration)
      .attr('d', function (d) {
        let o = {
          x: source.x,
          y: source.y
        }
        return diagonal(o, o)
      })
      .remove();

    // Store the old positions for transition.
    nodes.forEach(function (d: any) {
      d.x0 = d.x;
      d.y0 = d.y;
    });

    // Creates a curved (diagonal) path from parent to the child nodes
    function diagonal(s, d) {

      let path = `M ${s.y} ${s.x}
            C ${(s.y + d.y) / 2} ${s.x},
              ${(s.y + d.y) / 2} ${d.x},
              ${d.y} ${d.x}`

      return path
    }

    // Toggle children on click.
  }

  click = (d) => {
    if (d.children) {
      d._children = d.children;
      d.children = null;
    } else {
      d.children = d._children;
      d._children = null;
    }
    this.update(d);
  }


}