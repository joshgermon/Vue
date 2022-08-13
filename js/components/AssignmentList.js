import Assignment from './Assignment.js'
import AssignmentTags from './AssignmentTags.js'

export default {

    components: { Assignment, AssignmentTags },

    template: `
        <section v-if="assignments.length" class="space-y-3">
            <h2 class="font-bold mb-3">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>

            <assignment-tags 
                :currentTag="currentTag"
                :tags="assignments.map(a => a.tag)"
                @change="currentTag = $event"
            ></assignment-tags>

            <ul class="border border-gray-600 rounded-lg divide-y divide-gray-600">

                <assignment 
                    v-for="assignment in filteredAssignments" 
                    :key="assignment.id"
                    :assignment="assignment"
                >
                    {{ assignment.name }}
                </assignment>

            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String
    },

    data() {
        return {
            currentTag: 'all'
        }
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments
            } else {
                return this.assignments.filter(a => a.tag === this.currentTag)
            }
        }
    }
}